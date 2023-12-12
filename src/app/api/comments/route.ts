import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function POST(req: Request, res:any) {
    try{
        const body = await req.json();
        const session = await getServerSession(authOptions);

        const {comment, postId} = body;
        const newComments = await prisma.comment.create({
            data: {
                content: comment,
                postAuthor: {
                    connect: {
                        id: postId
                    }
                },
                author:{
                    connect: {
                        id: session?.user.id,
                    }
                }
            }
        })
        console.log(newComments);
        return NextResponse.json({comment : newComments}, {status:201});

    } catch (error) {return NextResponse.json(error)};
}