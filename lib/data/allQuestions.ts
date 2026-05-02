import { maximumSpsvQuestions } from './terminologyQuestions';
import { chapter1IndustryQuestions } from './chapter1Questions';
import { chapter2DriverLicensingQuestions } from './chapter2Questions';
import { chapter3VehicleQuestions } from './chapter3Questions';
import { chapter4ExamQuestions } from './chapter4Questions';
import { chapter5SpsvQuestions } from './chapter5Questions';
import { chapter6NavigationQuestions } from './chapter6Questions';
import { chapter7FaresQuestions } from './chapter7Questions';
import { chapter8CustomerServiceQuestions } from './chapter8Questions';
import { chapter9BusinessQuestions } from './chapter9Questions';
import { chapter10SafetyQuestions } from './chapter10Questions';

// Utility to strip JSX icons for API serialization
const stripIcons = (questions: any[]) => {
    if (!Array.isArray(questions)) {
        console.error('stripIcons: questions is not an array', questions);
        return [];
    }
    return questions.map(q => {
        if (q && typeof q === 'object') {
            const { icon, ...rest } = q;
            return rest;
        }
        return q;
    });
};

export const allQuestions = [
    ...stripIcons(maximumSpsvQuestions),
    ...stripIcons(chapter1IndustryQuestions),
    ...stripIcons(chapter2DriverLicensingQuestions),
    ...stripIcons(chapter3VehicleQuestions),
    ...stripIcons(chapter4ExamQuestions),
    ...stripIcons(chapter5SpsvQuestions),
    ...stripIcons(chapter6NavigationQuestions),
    ...stripIcons(chapter7FaresQuestions),
    ...stripIcons(chapter8CustomerServiceQuestions),
    ...stripIcons(chapter9BusinessQuestions),
    ...stripIcons(chapter10SafetyQuestions)
];
