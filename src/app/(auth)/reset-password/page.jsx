import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const resetPasswordPage = () => {
    return (
        <div>
            <h1>Reset Your Password</h1>
            <Suspense fallback= "Loading...">
                <ResetPasswordForm />
            </Suspense>

        </div>
    );
};

export default resetPasswordPage;