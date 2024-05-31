'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function navigate(route: string, code: string) {
    redirect(`/${route}/${code}`);
}
export async function getCookie(name: string) {
    return cookies().get(name);
}
