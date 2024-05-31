'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function navigate(route: string, code?: string) {
    if (code) redirect(`/${route}/${code}`);
    else redirect(`/${route}`);
}
export async function getCookie(name: string) {
    return cookies().get(name);
}
