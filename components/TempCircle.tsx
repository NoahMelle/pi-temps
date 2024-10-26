"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/tempcircle.module.scss";

export default function TempCircle({ targetTemp }: {targetTemp: number}) {
    const [temp, setTemp] = useState(0);
    const animationSpeed = 0.015;

    function calculateCircumference(radius: number) {
        return Math.round(2 * Math.PI * radius);
    }

    const strokeWidth = 10;
    const radius = 45;
    const circumference = calculateCircumference(radius);
    const availableCircumference = (circumference / 3) * 2;
    const startingPoint = circumference / 3 + circumference / 4;
    const GAP = 4;

    const dashArray = availableCircumference * (temp / 100);

    useEffect(() => {
        if (temp === targetTemp) return;

        const step = () => {
            setTemp((prev) => {
                const difference = targetTemp - prev;
                if (Math.abs(difference) < 0.1) {
                    return targetTemp;
                }
                return prev + difference * animationSpeed;
            });
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [targetTemp, animationSpeed]);

    return (
        <div className="flex flex-col justify-center gap-8 relative">
            <svg
                className={styles.spinner}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
            >
                <defs>
                    <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#1ffef9" />
                        <stop offset="100%" stopColor="#9417fc" />
                    </linearGradient>
                </defs>
                <g stroke="url(#gradient)">
                    {temp > 10 && (
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            strokeWidth={strokeWidth}
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeDashoffset={startingPoint}
                            strokeDasharray={
                                dashArray -
                                strokeWidth -
                                GAP +
                                " " +
                                (circumference - dashArray + strokeWidth + GAP)
                            }
                            strokeLinecap="round"
                        />
                    )}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        strokeWidth={strokeWidth}
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeDashoffset={startingPoint - dashArray}
                        strokeDasharray={0 + " " + circumference}
                        strokeLinecap="round"
                    />
                </g>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
                <h3 className="text-3xl font-semibold">{targetTemp}&deg;C</h3>
                <h3>CPU</h3>
            </div>
        </div>
    );
}
