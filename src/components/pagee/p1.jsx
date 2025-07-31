import React from 'react';
import { Helmet } from 'react-helmet';

const P1 = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Buyurtma Qabul Qiluvchilar | Tanirovka.uz</title>
        <meta
          name="description"
          content="O‘zbekiston bo‘ylab tanirovka va detailing xizmatlari. Toshkent, Farg‘ona vodiysi va boshqa hududlarda savdo nuqtalari, aloqa raqamlari, ustalar va xizmatlar ro‘yxati."
        />
        <meta
          name="keywords"
          content="tanirovka, detailing, bron plyonka, Toshkent, Andijon, Namangan, Farg‘ona, X99 PRO, xizmat"
        />
        <meta name="author" content="Tanirovka.uz" />
        <meta property="og:title" content="Buyurtma Qabul Qiluvchilar | Tanirovka.uz" />
        <meta
          property="og:description"
          content="Eng yaxshi tanirovka ustalari va savdo nuqtalari. Telefon raqamlari, manzillar va xizmatlar bilan to‘liq ro‘yxat."
        />
        <meta property="og:url" content="https://tanirovka.uz/order" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <div className="bg-white text-black p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          📦 O‘zbekiston Respublikasi bo‘yicha savdo nuqtalari
        </h2>

        {/* Toshkent – Savdo nuqtalari */}
        {/* Toshkent – Sergeli bozor – Omonjon va Obidjon */}
        {/* Toshkent – Sergeli bozor – Omonjon va Obidjon */}
        <div className="border p-4 rounded-xl shadow space-y-4">
          {/* <h3 className="text-xl font-semibold text-red-600 mb-2">📍 Toshkent shahri – Sergeli bozori</h3> */}

          <div className="flex flex-col md:flex-row gap-4">
            {/* Omonjon */}
            <div className="bg-gray-50 p-4 rounded-lg flex-1 space-y-1">
              <p>👤 <strong>Omonjon</strong></p>
              <p>📞 <strong>+998 95 707 08 08</strong></p>
              <p>💬 Telegram: <a href="https://t.me/X99PROUZB" className="text-blue-600 underline">@X99PROUZB</a></p>
              <p>📍 Manzil: Sergeli avtomobil bozori 8/2/5 do‘kon</p>
            </div>

            {/* Obidjon */}
            <div className="bg-gray-50 p-4 rounded-lg flex-1 space-y-1">
              <p>👤 <strong>Obidjon</strong></p>
              <p>📞 <strong>+998 99 826 67 67</strong></p>
              <p>💬 Telegram: <a href="https://t.me/DreamCar_Uzb" className="text-blue-600 underline">@DreamCar_Uzb</a></p>
              <p>📍 Manzil: Sergeli avtomobil bozori 8/2/5 do‘kon</p>
            </div>
          </div>
        </div>



        {/* Fargʻona vodiysi */}
        <div className="border p-4 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-semibold text-red-600">📍 Farg‘ona, Andijon, Namangan</h3>
          <p>👤 Oybekjon</p>
          <p>📞 <strong>+998 77 404 35 33</strong></p>
          <p>💬 Telegram: <a href="https://t.me/DAC_KOKAND" className="text-blue-600 underline">@DAC_KOKAND</a></p>
          <p>📍 Manzil: Qo‘qon mastona bozori</p>
        </div>

        {/* Detailing – Toshkent */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Detailing – Toshkent */}
          <div className="border p-4 rounded-xl shadow flex-1 space-y-4">
            <h3 className="text-xl font-semibold text-green-700">🧰 Toshkent Detailing xizmati</h3>
            <div className="space-y-2 text-sm">
              <p>👨‍🔧 Umarbek</p>
              <p>📞 <strong>+998 99 444 48 35</strong></p>
              <p>📍 Yakkasaroy tumani, Qushbegi 17 (mo‘ljal: qarsillama somsani oldidagi moyka)</p>
              <p>
                🗺 <a
                  href="https://yandex.uz/maps/-/CDbKMFSd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  X99 PRO DETAILING (xaritada ochish)
                </a>
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tanirovka</li>
                <li>Laminatsiya</li>
                <li>Bron plyonka</li>
                <li>Polirovka (Ceramica)</li>
              </ul>
            </div>
          </div>

          {/* Tijorat Direktori */}
          <div className="border p-4 rounded-xl shadow flex-1 space-y-2">
            <h4 className="text-xl font-semibold text-green-700">🏢 Tijorat Direktori</h4>
            <p>👤 Qahramon Yusupov</p>
            <p>📞 <strong>+998 95 880 35 33</strong></p>
            <p>
              💬 Telegram: <a href="https://t.me/qahramonyusuf" className="text-blue-600 underline">@qahramonyusuf</a>
            </p>
          </div>
        </div>


        {/* Vaqtlar */}
        <div className="border-t pt-4">
          <p className="text-blue-600 font-medium">⏰ Buyurtma qabul qilish vaqti: 08:00 – 23:00</p>
          <p className="text-blue-600 font-medium">🚚 Yetkazib berish xizmati: 09:00 – 21:00</p>
        </div>
      </div>
    </div>
  );
};

export default P1;
