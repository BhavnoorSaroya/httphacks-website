import { useState, useEffect, useRef, use } from "react";
import { Navbar } from "@/components/Navbar";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { toast } from "sonner";


export default function Register() {

    const showToast = () => {
        // console.log("clicked");
        toast.success(
            "So are we! 😎",
            {
            className: 'no-border-radius',
            }
        );
    };

    // Set target date: midnight, Oct 11, 2025
    const targetDate = new Date("2025-10-11T00:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) return null; // countdown finished

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isAnimating, setIsAnimating] = useState(false);

    // refs for timers so we can clean up
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        // update every second
        intervalRef.current = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRefresh = () => {
        // refresh immediately
        setTimeLeft(calculateTimeLeft());

        // trigger a short animation
        setIsAnimating(true);
        if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
        animTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, 350);
    };

    const formatSpelledOut = (t: { hours: number; minutes: number; seconds: number }) =>
        `${t.hours.toString().padStart(2, "0")} hours, ${t.minutes
            .toString()
            .padStart(2, "0")} minutes, and ${t.seconds.toString().padStart(2, "0")} seconds`;

    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col">
            <Navbar />

            <main className="flex flex-col items-center justify-center flex-1 text-center p-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-3">Registration</h1>

                {/* human-readable sentence below the h1; aria-live for screen readers */}
                {timeLeft ? (
                    <p
                        className={`text-lg md:text-2xl mb-6 transform transition-all duration-300 ${isAnimating ? "scale-105 opacity-90" : "scale-100"
                            }`}
                        aria-live="polite"
                    >
                        Opens in {formatSpelledOut(timeLeft)}
                    </p>
                ) : (
                    <Text className="text-xl md:text-2xl mb-6">Registration is now open! </Text>
                )}


                <Button
                    size="lg"
                    //   disabled={!timeLeft}
                    className="md:px-10 md:py-4"
                    onClick={() => {
                        showToast();
                        handleRefresh();
                    }}
                >
                    {timeLeft ? "I'm hyped" : "Register Now"}
                </Button>
            </main>
        </div>
    );
}
