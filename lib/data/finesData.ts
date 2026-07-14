export interface FineOffence {
  id: string;
  title: string;
  category: 'Major Offences' | 'SPSV Operators' | 'Vehicle Equipment' | 'Taximeters (Taxis Only)' | 'Standing or Plying for Hire' | 'Fares and Charges' | 'Road Safety Fines';
  amountText: string;
  amount: number; // For sorting/highlighting
  isMax?: boolean;
  penaltyPoints?: string;
  details?: string;
}

export const FINES_DATA: FineOffence[] = [
  // Major Offences
  {
    id: 'major-unlicensed',
    title: 'Operating without a valid SPSV licence (expired or unlicensed vehicle)',
    category: 'Major Offences',
    amountText: 'Up to €5,000',
    amount: 5000,
    isMax: true,
    details: 'This is a serious offence that can result in a fine of up to €5,000 for the driver and the vehicle owner (if they are different people).'
  },
  // SPSV Operators
  {
    id: 'op-remove-disc',
    title: 'Taking off or trying to take off a tamper-proof licence disc',
    category: 'SPSV Operators',
    amountText: '€150',
    amount: 150
  },
  {
    id: 'op-hide-disc',
    title: 'Not showing the tamper-proof licence disc',
    category: 'SPSV Operators',
    amountText: '€150',
    amount: 150
  },
  {
    id: 'op-no-driver-id',
    title: 'Not displaying the required driver ID',
    category: 'SPSV Operators',
    amountText: '€200',
    amount: 200
  },
  {
    id: 'op-no-nta-notification',
    title: 'Not telling the NTA about the vehicle you are driving',
    category: 'SPSV Operators',
    amountText: '€200',
    amount: 200
  },
  // Vehicle Equipment
  {
    id: 'eq-no-door-signs',
    title: 'Not having the approved door signs on a taxi or wheelchair-accessible taxi',
    category: 'Vehicle Equipment',
    amountText: '€250',
    amount: 250
  },
  {
    id: 'eq-bad-roof-signs',
    title: 'Not following the rules for taxi roof signs',
    category: 'Vehicle Equipment',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'eq-no-info-card',
    title: 'Not showing the required In-Vehicle Information Card',
    category: 'Vehicle Equipment',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'eq-not-meeting-rules',
    title: 'Not meeting vehicle rules for your licence type',
    category: 'Vehicle Equipment',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'eq-unallowed-ads',
    title: 'Showing signs or ads on a hackney or limousine that are not allowed by the NTA',
    category: 'Vehicle Equipment',
    amountText: '€80',
    amount: 80
  },
  // Taximeters
  {
    id: 'meter-uncalibrated',
    title: 'Not keeping the taximeter correctly calibrated',
    category: 'Taximeters (Taxis Only)',
    amountText: '€250',
    amount: 250
  },
  {
    id: 'meter-improper-fit',
    title: 'Not fitting or using the taximeter as required',
    category: 'Taximeters (Taxis Only)',
    amountText: '€150',
    amount: 150
  },
  {
    id: 'meter-waiting-fare',
    title: 'Using the taximeter while the taxi is waiting for a fare',
    category: 'Taximeters (Taxis Only)',
    amountText: '€150',
    amount: 150
  },
  {
    id: 'meter-not-using-journey',
    title: 'Not using the taximeter during a journey',
    category: 'Taximeters (Taxis Only)',
    amountText: '€150',
    amount: 150
  },
  // Standing or Plying
  {
    id: 'stand-wrong-county',
    title: 'Operating in a county where you are not licensed',
    category: 'Standing or Plying for Hire',
    amountText: '€200',
    amount: 200
  },
  {
    id: 'stand-unofficial-stand',
    title: 'Waiting for a fare at a place that is not an official stand',
    category: 'Standing or Plying for Hire',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'stand-rank-unavailable',
    title: 'Waiting at a taxi rank when not available for hire',
    category: 'Standing or Plying for Hire',
    amountText: '€80',
    amount: 80
  },
  {
    id: 'stand-blocking-rank',
    title: 'Stopping on the road near a full taxi rank instead of moving on',
    category: 'Standing or Plying for Hire',
    amountText: '€80',
    amount: 80
  },
  // Fares and Charges
  {
    id: 'fare-refuse-guide-dog',
    title: 'Refusing to carry a guide dog or assistance dog',
    category: 'Fares and Charges',
    amountText: '€250',
    amount: 250
  },
  {
    id: 'fare-refuse-wheelchair',
    title: 'Refusing to carry a wheelchair user',
    category: 'Fares and Charges',
    amountText: '€250',
    amount: 250
  },
  {
    id: 'fare-no-cashless-device',
    title: 'Not carrying a cashless payment device',
    category: 'Fares and Charges',
    amountText: '€200',
    amount: 200
  },
  {
    id: 'fare-refuse-cashless',
    title: 'Refusing to accept a cashless payment',
    category: 'Fares and Charges',
    amountText: '€200',
    amount: 200
  },
  {
    id: 'fare-refuse-short-trip',
    title: 'Refusing a short journey under 30km without good reason',
    category: 'Fares and Charges',
    amountText: '€150',
    amount: 150
  },
  {
    id: 'fare-booking-not-booked',
    title: 'Charging a booking fee when the taxi was not pre-booked',
    category: 'Fares and Charges',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'fare-no-taxi-receipt',
    title: 'Not printing and offering a receipt at the end of a taxi journey',
    category: 'Fares and Charges',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'fare-no-limo-receipt',
    title: 'Not offering a receipt at the end of a hackney or limousine journey',
    category: 'Fares and Charges',
    amountText: '€100',
    amount: 100
  },
  {
    id: 'fare-no-booking-record',
    title: 'Not carrying the required booking record for a hackney or limousine hire',
    category: 'Fares and Charges',
    amountText: '€80',
    amount: 80
  },
  // Road Safety Fines
  {
    id: 'safety-mobile-phone',
    title: 'Holding a mobile phone while driving',
    category: 'Road Safety Fines',
    amountText: '€120 (Fixed) / Up to €2,000 (Court)',
    amount: 120,
    penaltyPoints: '3 points (Fixed) / 5 points (Court)',
    details: 'Holding a mobile phone while driving will result in a fixed charge notice of €120 and 3 penalty points. If you choose not to pay and are convicted in court, the penalty increases to 5 penalty points and a fine of up to €2,000.'
  },
  {
    id: 'safety-seatbelts',
    title: 'Failing to ensure seatbelt compliance',
    category: 'Road Safety Fines',
    amountText: 'Fixed penalty / Up to €2,000 (Court)',
    amount: 60,
    penaltyPoints: 'Penalty points apply upon conviction',
    details: 'Adult passengers who do not wear a seatbelt (and drivers who fail to ensure passengers under 17 wear theirs) can face a fixed payment penalty, penalty points, or a court prosecution with a fine of up to €2,000.'
  }
];
