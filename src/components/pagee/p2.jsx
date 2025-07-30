import React from 'react';

const P2 = () => {
    return (
        <main className="bg-white text-black p-6 space-y-6 mt-10">
            <header>
                <h1 className="text-2xl font-bold text-center text-blue-700">
                    📍 Lokatsiyalar va Kontakt Ma’lumotlari
                </h1>
                <p className="text-center text-gray-600 mt-2">
                    Toshkent va Farg‘ona vodiysidagi savdo nuqtalari va buyurtma uchun kontaktlar
                </p>
            </header>

            <section className="grid md:grid-cols-2 gap-6">
                <article className="border p-4 rounded-xl shadow hover:shadow-md transition">
                    <h2 className="text-lg font-semibold text-blue-800">📦 Omonjon</h2>
                    <address className="not-italic mt-2 space-y-1">
                        <p>📞 Telefon: <strong>+998 95 707 08 08</strong></p>
                        <p>
                            📨 Telegram:{" "}
                            <a
                                href="https://t.me/X99PROUZB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                @X99PROUZB
                            </a>
                        </p>
                    </address>
                </article>

                <article className="border p-4 rounded-xl shadow hover:shadow-md transition">
                    <h2 className="text-lg font-semibold text-blue-800">🏬 Sergeli Mashina Bozori</h2>
                    <p>📍 Do‘kon: <strong>8/2/5</strong></p>
                    <address className="not-italic mt-2 space-y-1">
                        <p>📞 Obidjon: <strong>+998 99 826 67 67</strong></p>
                        <p>
                            📨 Telegram:{" "}
                            <a
                                href="https://t.me/DreamCar_Uzb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                @DreamCar_Uzb
                            </a>
                        </p>
                    </address>
                </article>

                <article className="border p-4 rounded-xl shadow hover:shadow-md transition">
                    <h2 className="text-lg font-semibold text-blue-800">📍 Farg‘ona Vodiysi</h2>
                    <address className="not-italic mt-2 space-y-1">
                        <p>📞 Oybek: <strong>+998 77 404 35 33</strong></p>
                        <p>
                            📨 Telegram:{" "}
                            <a
                                href="https://t.me/DAC_KOKAND"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                @DAC_KOKAND
                            </a>
                        </p>
                    </address>
                </article>
            </section>
        </main>
    );
};

export default P2;
