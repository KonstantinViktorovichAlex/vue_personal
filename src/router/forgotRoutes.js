import Forgot from "../view/Forgot";

export const forgotRoutes = [
    {
        path: 'forgot',
        name: 'forgot',
        component: Forgot,
        redirect: { name: 'forgotOptions' },
        children: [
            {
                path: 'options',
                name: 'forgotOptions',
                component: () => import('../components/forgot/ForgotOptions'),
            },
            {

                path: 'sms-step-two',
                name: 'smsStepTwo',
                component: () => import('../components/forgot/sms/SmsStepTwo'),
            },
            {
                path: 'sms-step-three',
                name: 'smsStepThree',
                component: () => import('../components/forgot/sms/SmsStepThree'),
            },
            {
                path: 'new-password',
                name: 'newPassword',
                component: () => import('../components/forgot/NewPassword'),
            },
            {
                path: 'email-step-two',
                name: 'emailStepTwo',
                component: () => import('../components/forgot/email/EmailStepTwo'),
            },
            {
                path: 'email-step-three',
                name: 'emailStepThree',
                component: () => import('../components/forgot/email/EmailStepThree'),
            }
        ]
    },
]