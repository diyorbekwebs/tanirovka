import React from 'react';

const P2 = () => {
    return (
        <div>
            <div class="bg-white text-black p-6 space-y-6 mt-10">
                <h2 class="text-2xl font-bold text-center text-blue-700">📍 Lokatsiyalar va Kontaktlar</h2>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="border p-4 rounded-xl shadow">
                        <h3 class="text-lg font-semibold text-blue-800">📦 Omonjon</h3>
                        <p>📞 Tel: <strong>+998 95-707-08-08</strong></p>
                        <p>📨 Telegram: <a href="https://t.me/X99PROUZB" class="text-blue-500 hover:underline">@X99PROUZB</a></p>
                    </div>

                    <div class="border p-4 rounded-xl shadow">
                        <h3 class="text-lg font-semibold text-blue-800">🏬 Sergeli Moshina Bozori</h3>
                        <p>📍 Do'kon: 8/2/5</p>
                        <p>📞 Tel: <strong>+998 99-826-67-67</strong> (Obidjon)</p>
                        <p>📨 Telegram: <a href="https://t.me/DreamCar_Uzb" class="text-blue-500 hover:underline">@DreamCar_Uzb</a></p>
                    </div>

                    <div class="border p-4 rounded-xl shadow">
                        <h3 class="text-lg font-semibold text-blue-800">📍 Farg'ona vodiysi</h3>
                        <p>📞 Tel: <strong>+998 77-404-35-33</strong> (Oybek)</p>
                        <p>📨 Telegram: <a href="https://t.me/DAC_KOKAND" class="text-blue-500 hover:underline">@DAC_KOKAND</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default P2;
