'use client'
import { signOut } from "next-auth/react";
import { Button } from "./button";

export default function SignOutButton() {
    return (
        <>
            <Button onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/`
            })} variant='destructive'>Keluar</Button>
        </>
    )
}