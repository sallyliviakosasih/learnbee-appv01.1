import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function POST(req: Request, res:any) {
    try{
        const body = await req.json();
        const session = await getServerSession(authOptions);

        const {title, content, tags} = body;
        const newPost = await prisma.post.create({
            data:{
                title: title,
                content: content,
                tags: tags,
                author: {
                    connect: {
                        id: session?.user.id
                    }
                }
            }
        })
        return NextResponse.json({newPost}, {status:201});

    } catch (error) {return NextResponse.json(error)};
}