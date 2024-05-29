'use server';

import { redirect } from 'next/navigation';

export async function navigate(code: string) {
    redirect(`/register/${code}`);
}
