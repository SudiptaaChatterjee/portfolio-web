'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Missing required fields' };
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // User must set this
            pass: process.env.GMAIL_PASS, // User must set this (App Password)
        },
    });

    try {
        // Send Email
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'sudiptachatterjee0905@gmail.com', // Destination
            replyTo: email,
            subject: `New Message from Portfolio: ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email. Please try again later.' };
    }
}
