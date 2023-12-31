import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/user';
import { connectDB } from '@/lib/mongodb';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: 'Password must be at least 6 characters',
      },
      { status: 400 }
    );

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: 'Emails already exists',
        },
        { status: 409 }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      name,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json(savedUser);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
}
