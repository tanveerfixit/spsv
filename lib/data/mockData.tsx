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

export const allSpsvQuestions = [
  ...chapter1IndustryQuestions,
  ...chapter2DriverLicensingQuestions,
  ...chapter3VehicleQuestions,
  ...chapter4ExamQuestions,
  ...chapter5SpsvQuestions,
  ...chapter6NavigationQuestions,
  ...chapter7FaresQuestions,
  ...chapter8CustomerServiceQuestions,
  ...chapter9BusinessQuestions,
  ...chapter10SafetyQuestions,
];
