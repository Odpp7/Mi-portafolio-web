import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/app/data/Prompt";
import Groq from "groq-sdk";

const groq = new Groq({apiKey: process.env.GROQ_API_KEY})

export async function POST(req:Request) {

  try {

    const { message, history = [] } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      
      messages: [
        { role: "system",content: SYSTEM_PROMPT},
      
        ...history,
        
        { role: "user",content: message}
      ],

      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 400,
    });

    return NextResponse.json({ message: chatCompletion.choices[0].message.content, success: true });

  } catch (error) {

    return NextResponse.json({ error: "Error al procesar la solicitud",success: false}, {status: 500});

  }
}