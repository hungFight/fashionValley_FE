'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function navigate(code: string) {
    redirect(`/register/${code}`);
}
export async function getCookie(name: string) {
    return cookies().get(name);
}
