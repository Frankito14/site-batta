import FleteCard from "./FleteCard";

import flete_s from "@/assets/images/fletes/fletes_s.webp";
import flete_m from "@/assets/images/fletes/fletes_m.webp";
import flete_l from "@/assets/images/fletes/fletes_l.webp";
import flete_l2 from "@/assets/images/fletes/fletes_l2.webp";
import flete_xl from "@/assets/images/fletes/fletes_xl.webp";
import flete_xxl from "@/assets/images/fletes/fletes_xxl.webp";



const fletesData = [
    {
        title: "Camión Pequeño",
        size: "S",
        img: flete_s,
        description: "La solución rápida para tus envíos urbanos. Movilidad ágil y segura en ciudad. La unidad perfecta para traslados precisos, repartos comerciales y entregas puerta a puerta con la puntualidad que nos caracteriza.",
        specs: [
            { feature: "Largo de Carrocería", value: "3 Metros" },
            { feature: "Ancho de Carrocería", value: "2 Metros" },
            { feature: "Altura Interior", value: "1.70 Metros" },
            { feature: "Capacidad de Carga", value: "1 Tn (Tonelada)" }
        ]
    },
    {
        title: "Mercedes-Benz 710",
        size: "M",
        img: flete_m,
        description: "Eficiencia y Versatilidad Total. Ideal para: Distribución en zonas de difícil acceso, calles estrechas en CABA y entregas que requieren agilidad sin sacrificar capacidad de carga.",
        specs: [
            { feature: "Largo Caja Carga", value: "5.50 Metros / 8 Pallets" },
            { feature: "Ancho Caja Carga", value: "2 Metros" },
            { feature: "Altura Int. Caja Carga", value: "2 Metros" },
            { feature: "Capacidad de Carga", value: "3.5 Tn / 20 m³" }
        ]
    },
    {
        title: "Ford Cargo 916",
        size: "L",
        img: flete_l,
        description: "Destaca la combinación de espacio y fuerza para traslados industriales o comerciales exigentes. Máxima capacidad, mínimo costo por pallets Trasladá hasta 30 pallets o 27 toneladas de una sola vez. Maximizamos tu logística para que tu mercadería llegue a destino con la eficiencia que tu negocio necesita.",
        specs: [
            { feature: "Largo Caja Carga", value: "5.50 Metros / 8 Pallets" },
            { feature: "Ancho Caja Carga", value: "2.40 Metros" },
            { feature: "Altura Int. Caja Carga", value: "2.10 Metros" },
            { feature: "Capacidad de Carga", value: "4.5 Tn / 27 m³" }
        ]
    },
    {
        title: "Vw Delivery 9170",
        size: "L2",
        img: flete_l2,
        description: "Agilidad y Gran Capacidad Ideal para: Distribución urbana intensiva, mudanzas completas hasta 4 ambientes. Logística de mercadería palletizada en CABA y AMBA.",
        specs: [
            { feature: "Largo Caja Carga", value: "5.50 Metros / 8 Pallets" },
            { feature: "Ancho Caja Carga", value: "2.35 Metros" },
            { feature: "Altura Int. Caja Carga", value: "2.20 Metros" },
            { feature: "Capacidad de Carga", value: "4.5 Tn / 27 m³" }
        ]
    },
    {
        title: "Camión Extra Grande",
        size: "XL",
        img: flete_xl,
        description: "Maximizá tu logística sin pagar de más. 12 pallets y 7 toneladas de capacidad en una sola unidad: la medida justa entre un flete convencional y un camión pesado.",
        specs: [
            { feature: "Largo Caja Carga", value: "6.20 Metros / 12 Pallets" },
            { feature: "Ancho Interior", value: "2.40 Metros" },
            { feature: "Altura Interior", value: "2.25 Metros" },
            { feature: "Capacidad de Carga", value: "7.0 Tn / 35 m³" }
        ]
    },
    {
        title: "Semirremolque",
        size: "XXL",
        img: flete_xxl,
        description: "Máxima capacidad, mínimo costo por pallets. Trasladá hasta 30 pallets o 27 toneladas de una sola vez. Maximizamos tu logística para que tu mercadería llegue a destino con la eficiencia que tu negocio necesita.",
        specs: [
            { feature: "Largo Caja Carga", value: "15.5 Metros / 30 Pallets" },
            { feature: "Ancho Caja Carga", value: "2.60 Metros" },
            { feature: "Altura Int. Caja Carga", value: "2.70 Metros" },
            { feature: "Capacidad de Carga", value: "25.0 Tn / 108 m³" }
        ],
        phone: "5491132780412"
    }
];
export default function FletesList() {
    return (
        <>
            {fletesData.map((fleteData, index) => (
                <FleteCard
                    key={index}
                    img={fleteData.img}
                    specs={fleteData.specs}
                    title={fleteData.title}
                    description={fleteData.description}
                    whatsappMsg={fleteData.description}
                    phone={fleteData?.phone || "541150545987"}
                />
            ))}
        </>
    )
}   