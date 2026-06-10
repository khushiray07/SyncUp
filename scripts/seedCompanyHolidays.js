const { cert, initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const companies = [
  {
    id: 'infosys',
    name: 'Infosys',
    country: 'India',
    year: 2026,
    holidays: [
      {
        id: 'new-year',
        title: 'New Year',
        date: '2026-01-01',
        type: 'Public Holiday',
      },
      {
        id: 'republic-day',
        title: 'Republic Day',
        date: '2026-01-26',
        type: 'Public Holiday',
      },
      {
        id: 'holi',
        title: 'Holi',
        date: '2026-03-04',
        type: 'Festival',
      },
      {
        id: 'independence-day',
        title: 'Independence Day',
        date: '2026-08-15',
        type: 'Public Holiday',
      },
      {
        id: 'diwali',
        title: 'Diwali',
        date: '2026-11-08',
        type: 'Festival',
      },
      {
        id: 'christmas',
        title: 'Christmas',
        date: '2026-12-25',
        type: 'Public Holiday',
      },
    ],
  },
  {
    id: 'tcs',
    name: 'TCS',
    country: 'India',
    year: 2026,
    holidays: [
      {
        id: 'new-year',
        title: 'New Year',
        date: '2026-01-01',
        type: 'Public Holiday',
      },
      {
        id: 'republic-day',
        title: 'Republic Day',
        date: '2026-01-26',
        type: 'Public Holiday',
      },
      {
        id: 'holi',
        title: 'Holi',
        date: '2026-03-04',
        type: 'Festival',
      },
      {
        id: 'diwali',
        title: 'Diwali',
        date: '2026-11-08',
        type: 'Festival',
      },
    ],
  },
  {
    id: 'wipro',
    name: 'Wipro',
    country: 'India',
    year: 2026,
    holidays: [
      {
        id: 'new-year',
        title: 'New Year',
        date: '2026-01-01',
        type: 'Public Holiday',
      },
      {
        id: 'republic-day',
        title: 'Republic Day',
        date: '2026-01-26',
        type: 'Public Holiday',
      },
      {
        id: 'ugadi',
        title: 'Ugadi',
        date: '2026-03-19',
        type: 'Regional Holiday',
      },
      {
        id: 'diwali',
        title: 'Diwali',
        date: '2026-11-08',
        type: 'Festival',
      },
    ],
  },
  {
    id: 'accenture',
    name: 'Accenture',
    country: 'India',
    year: 2026,
    holidays: [
      {
        id: 'new-year',
        title: 'New Year',
        date: '2026-01-01',
        type: 'Public Holiday',
      },
      {
        id: 'republic-day',
        title: 'Republic Day',
        date: '2026-01-26',
        type: 'Public Holiday',
      },
      {
        id: 'good-friday',
        title: 'Good Friday',
        date: '2026-04-03',
        type: 'Public Holiday',
      },
      {
        id: 'christmas',
        title: 'Christmas',
        date: '2026-12-25',
        type: 'Public Holiday',
      },
    ],
  },
];

async function seedCompanyHolidays() {
  for (const company of companies) {
    const companyRef = db.collection('companies').doc(company.id);

    await companyRef.set({
      name: company.name,
      country: company.country,
      year: company.year,
    });

    for (const holiday of company.holidays) {
      const holidayRef = companyRef.collection('holidays').doc(holiday.id);

      await holidayRef.set({
        title: holiday.title,
        date: holiday.date,
        type: holiday.type,
      });
    }

    console.log(`Seeded holidays for ${company.name}`);
  }

  console.log('Company holiday seeding completed');
}

seedCompanyHolidays().catch((error) => {
  console.error('Error seeding company holidays:', error);
  process.exit(1);
});
