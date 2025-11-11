import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, furigana, phone, postalCode, prefecture, city, address, building, email, inquiryType, message } = body

    // バリデーション
    if (!name || !furigana || !phone || !prefecture || !city || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メール設定（環境変数から取得）
    // 実際の運用では .env.local に以下を設定してください：
    // SMTP_HOST=smtp.gmail.com
    // SMTP_PORT=587
    // SMTP_USER=your-email@gmail.com
    // SMTP_PASS=your-app-password
    // CONTACT_EMAIL=contact@your-domain.com

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: parseInt(process.env.SMTP_PORT || '587') === 465, // ポート465の場合はSSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 管理者向けメール（モダンなデザイン）
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `【メイプル】お問い合わせ：${inquiryType} - ${name}様`,
      text: `
お問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━
■ お名前
${name}

■ フリガナ
${furigana}

■ 電話番号
${phone}

■ 郵便番号
${postalCode || '未入力'}

■ ご住所
${prefecture}${city}${address || ''}${building ? ' ' + building : ''}

■ メールアドレス
${email}

■ お問合せ項目
${inquiryType}

■ お問合せ内容
${message}
━━━━━━━━━━━━━━━━━━━━━━

このメールは自動送信されています。
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
      background: linear-gradient(135deg, #8DC33C 0%, #6fa82e 100%);
      padding: 40px 20px;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header {
      background: linear-gradient(135deg, #ef8337 0%, #EC6C26 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    .header::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      height: 40px;
      background: white;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    }
    .header h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .header p {
      color: white;
      font-size: 14px;
      opacity: 0.95;
    }
    .content {
      padding: 40px 30px 30px;
      background: white;
    }
    .inquiry-type {
      display: inline-block;
      background: linear-gradient(135deg, #8DC33C 0%, #6fa82e 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .field {
      margin-bottom: 24px;
      border-radius: 12px;
      background: #F0F8E4;
      padding: 16px 20px;
      border-left: 4px solid #8DC33C;
      transition: all 0.3s ease;
    }
    .field:hover {
      background: #e8f5d0;
      transform: translateX(4px);
    }
    .label {
      font-size: 12px;
      color: #572A06;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .value {
      font-size: 16px;
      color: #572A06;
      line-height: 1.6;
      word-wrap: break-word;
    }
    .message-field {
      background: #fff;
      border: 2px solid #e9ecef;
      border-radius: 12px;
      padding: 20px;
      margin-top: 10px;
    }
    .footer {
      background: linear-gradient(135deg, #572A06 0%, #3d1e04 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .signature {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
      text-align: left;
      color: #572A06;
      line-height: 1.8;
    }
    .signature h3 {
      color: #ef8337;
      font-size: 18px;
      margin-bottom: 12px;
      border-bottom: 2px solid #8DC33C;
      padding-bottom: 8px;
    }
    .signature p {
      font-size: 13px;
      margin: 4px 0;
    }
    .footer-note {
      font-size: 12px;
      opacity: 0.9;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>📧 新しいお問い合わせ</h1>
      <p>メイプルのお片付けサービス</p>
    </div>

    <div class="content">
      <span class="inquiry-type">🏷️ ${inquiryType}</span>

      <div class="field">
        <div class="label">👤 お名前</div>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <div class="label">📝 フリガナ</div>
        <div class="value">${furigana}</div>
      </div>

      <div class="field">
        <div class="label">📞 電話番号</div>
        <div class="value">${phone}</div>
      </div>

      <div class="field">
        <div class="label">📮 郵便番号</div>
        <div class="value">${postalCode || '未入力'}</div>
      </div>

      <div class="field">
        <div class="label">🏠 ご住所</div>
        <div class="value">${prefecture}${city}${address || ''}${building ? ' ' + building : ''}</div>
      </div>

      <div class="field">
        <div class="label">✉️ メールアドレス</div>
        <div class="value">${email}</div>
      </div>

      <div class="field">
        <div class="label">💬 お問合せ内容</div>
        <div class="value message-field">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>

    <div class="footer">
      <div class="signature">
        <h3>株式会社メイプル</h3>
        <p>〒732-0029</p>
        <p>広島市東区福田1丁目838-1</p>
        <p>TEL：082-516-7800</p>
        <p>Email：info@huyouhinmaple-hiroshima.com</p>
      </div>
      <div class="footer-note">
        このメールは自動送信されています。<br>
        お客様からのお問い合わせを受け付けました。
      </div>
    </div>
  </div>
</body>
</html>
      `,
    }

    // お客様向け自動返信メール
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '【メイプル】お問い合わせありがとうございます',
      text: `
${name} 様

この度は、株式会社メイプルのお片付けサービスにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。

━━━━━━━━━━━━━━━━━━━━━━
■ お問合せ項目
${inquiryType}

■ お問合せ内容
${message}
━━━━━━━━━━━━━━━━━━━━━━

担当者より、1〜2営業日以内にご連絡させていただきます。
今しばらくお待ちくださいませ。

お急ぎの場合は、お電話でのお問い合わせも承っております。

━━━━━━━━━━━━━━━━━━━━━━
株式会社メイプル
〒732-0029
広島市東区福田1丁目838-1

TEL：082-516-7800（受付時間：9時〜18時 土日対応可）
フリーダイヤル：0120-551-669
Email：info@huyouhinmaple-hiroshima.com
Web：https://huyouhinmaple-hiroshima.com
━━━━━━━━━━━━━━━━━━━━━━

※このメールは自動送信されています。
※このメールに返信いただいても受信できませんのでご了承ください。
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
      background: linear-gradient(135deg, #F0F8E4 0%, #d4edb8 100%);
      padding: 40px 20px;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }
    .header {
      background: linear-gradient(135deg, #ef8337 0%, #EC6C26 100%);
      padding: 50px 30px;
      text-align: center;
      position: relative;
    }
    .header::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      height: 40px;
      background: white;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    }
    .checkmark {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 50%;
      margin: 0 auto 20px;
      font-size: 50px;
      color: #8DC33C;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      line-height: 80px;
      text-align: center;
    }
    .header h1 {
      color: white;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .header p {
      color: white;
      font-size: 16px;
      opacity: 0.95;
    }
    .content {
      padding: 40px 30px;
      background: white;
    }
    .greeting {
      font-size: 18px;
      color: #572A06;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message-box {
      background: #F0F8E4;
      border-left: 4px solid #8DC33C;
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
    }
    .message-box p {
      color: #572A06;
      line-height: 1.8;
      margin-bottom: 15px;
    }
    .inquiry-summary {
      background: white;
      border: 2px solid #8DC33C;
      border-radius: 12px;
      padding: 20px;
      margin: 25px 0;
    }
    .inquiry-label {
      font-size: 12px;
      color: #572A06;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .inquiry-value {
      font-size: 15px;
      color: #572A06;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .contact-card {
      background: linear-gradient(135deg, #572A06 0%, #3d1e04 100%);
      color: white;
      border-radius: 12px;
      padding: 30px;
      margin: 30px 0;
      text-align: center;
    }
    .contact-card h3 {
      color: #8DC33C;
      font-size: 20px;
      margin-bottom: 20px;
      border-bottom: 2px solid #8DC33C;
      padding-bottom: 10px;
      display: inline-block;
    }
    .contact-info {
      text-align: left;
      max-width: 400px;
      margin: 0 auto;
      line-height: 2;
    }
    .contact-info p {
      margin: 8px 0;
      font-size: 14px;
    }
    .phone-highlight {
      background: #ef8337;
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0 10px;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 4px 15px rgba(239, 131, 55, 0.3);
    }
    .footer {
      background: #F0F8E4;
      padding: 20px 30px;
      text-align: center;
      color: #572A06;
      font-size: 12px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <div class="checkmark">✓</div>
      <h1>お問い合わせを受け付けました</h1>
      <p>Thank you for contacting us!</p>
    </div>

    <div class="content">
      <div class="greeting">
        ${name} 様
      </div>

      <div class="message-box">
        <p>
          この度は、株式会社メイプルのお片付けサービスにお問い合わせいただき、誠にありがとうございます。
        </p>
        <p>
          以下の内容でお問い合わせを承りました。
        </p>
      </div>

      <div class="inquiry-summary">
        <div class="inquiry-label">📋 お問合せ項目</div>
        <div class="inquiry-value">${inquiryType}</div>

        <div class="inquiry-label">💬 お問合せ内容</div>
        <div class="inquiry-value">${message.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="message-box">
        <p>
          担当者より、<strong>1〜2営業日以内</strong>にご連絡させていただきます。<br>
          今しばらくお待ちくださいませ。
        </p>
      </div>

      <div class="contact-card">
        <h3>📞 お急ぎの場合</h3>
        <div class="contact-info">
          <div class="phone-highlight">
            フリーダイヤル：0120-551-669
          </div>
          <p>TEL：082-516-7800</p>
          <p>受付時間：9時〜18時（土日対応可）</p>
        </div>
      </div>

      <div class="contact-card">
        <h3>🏢 会社情報</h3>
        <div class="contact-info">
          <p><strong>株式会社メイプル</strong></p>
          <p>〒732-0029</p>
          <p>広島市東区福田1丁目838-1</p>
          <p>Email：info@huyouhinmaple-hiroshima.com</p>
          <p>Web：<a href="https://huyouhinmaple-hiroshima.com" style="color: #8DC33C;">https://huyouhinmaple-hiroshima.com</a></p>
        </div>
      </div>
    </div>

    <div class="footer">
      ※このメールは自動送信されています。<br>
      ※このメールに返信いただいても受信できませんのでご了承ください。
    </div>
  </div>
</body>
</html>
      `,
    }

    // 開発環境ではメール送信をスキップ（ログのみ出力）
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('メール送信設定が未設定のため、以下の内容をログに出力します：')
      console.log(adminMailOptions)
      console.log(customerMailOptions)

      return NextResponse.json(
        { message: '開発モード：メールはログに出力されました' },
        { status: 200 }
      )
    }

    // 管理者へメール送信
    await transporter.sendMail(adminMailOptions)

    // お客様へ自動返信メール送信
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json(
      { message: 'メールが正常に送信されました' },
      { status: 200 }
    )
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
}
