import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateDiagnosisQuestions } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { studentId } = await request.json();

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: 'Student ID is required' },
        { status: 400 }
      );
    }

    // Verify student exists
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      return NextResponse.json(
        { success: false, error: 'Student not found' },
        { status: 404 }
      );
    }

    // Generate first set of questions (letter recognition)
    const questions = await generateDiagnosisQuestions('letter', 5);

    // Create a test session ID
    const testId = crypto.randomUUID();

    return NextResponse.json({
      success: true,
      data: {
        testId,
        testType: 'letter',
        questions,
        totalQuestions: 15, // Will have 3 phases: letter, word, text
      },
    });
  } catch (error) {
    console.error('Start test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
