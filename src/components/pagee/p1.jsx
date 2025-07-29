import React from 'react';

const P1 = () => {
    return (
        <div>
            <div className="bg-white text-black p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center text-blue-700">📦 Buyurtma Qabul Qiluvchilar</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border p-4 rounded-xl shadow">
                        <h3 className="text-xl font-semibold text-red-600">📍 Toshkent shahri</h3>
                        <p>📞 Omon: <strong>95-707-08-08</strong></p>
                        <p>📞 Obid: <strong>99-826-67-67</strong></p>
                    </div>
                    <div className="border p-4 rounded-xl shadow">
                        <h3 className="text-xl font-semibold text-red-600">📍 Andijon, Namangan, Farg'ona</h3>
                        <p>📞 Oybek: <strong>77-404-35-33</strong></p>
                    </div>
                </div>

                <div className="border p-4 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-green-700">🧰 Tonirovka Ustasi – Toshkent</h3>

                    <div className="md:flex md:justify-between md:items-start gap-4">
                        {/* Usta ma'lumotlari */}
                        <div className="md:w-1/2">
                            <p>👨‍🔧 Umar: <strong>99-444-48-35</strong></p>
                            <p>📍 Manzil: Qushbegi 17</p>
                            <p>🗺 <a
                                href="https://yandex.uz/maps/-/CDbKMFSd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                X99 PRO DETAILING (xaritada ochish)
                            </a></p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                                <li>Tonirovka</li>
                                <li>Laminatsiya</li>
                                <li>Bron plyonka</li>
                                <li>Polirovka (Ceramica)</li>
                            </ul>
                        </div>

                        {/* Tijorat direktori ma'lumotlari */}
                        <div className="md:w-1/2 mt-4 md:mt-0 border-l md:pl-4">
                            <h4 className="text-md font-semibold text-purple-700">🏢 Tijorat direktori</h4>
                            <p>👤 Qahramon Yusupov</p>
                            <p>📞 <strong>+998 95 880 35 33</strong></p>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <p className="text-blue-600 font-medium">⏰ Buyurtma qabul qilish vaqti: 08:00 – 23:00</p>
                    <p className="text-blue-600 font-medium">🚚 Yetkazib berish xizmati: 09:00 – 18:00</p>
                </div>
            </div>
        </div>
    );
};

export default P1;
