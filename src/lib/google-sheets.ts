import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendBetaSignup(email: string, platform: string): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    console.warn('Google Sheets skipped: GOOGLE_SHEET_ID not configured');
    return;
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[email, platform, new Date().toISOString()]],
    },
  });
}
