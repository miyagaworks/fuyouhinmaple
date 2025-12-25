'use client'

import { useState } from 'react'

export default function EmailAddress() {
  const [showEmail, setShowEmail] = useState(false)

  // メールアドレスをパーツに分割
  const emailParts = {
    user: 'info',
    domain: 'hiroshima-maple',
    tld: 'com'
  }

  const getEmail = () => {
    return `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
  }

  return (
    <span>
      Email：
      {showEmail ? (
        <a
          href={`mailto:${getEmail()}`}
          className="text-primary hover:opacity-70 transition"
        >
          {getEmail()}
        </a>
      ) : (
        <button
          onClick={() => setShowEmail(true)}
          className="text-primary hover:opacity-70 transition underline cursor-pointer"
        >
          [クリックして表示]
        </button>
      )}
    </span>
  )
}
