import { Typewriter } from "@/components/ui/typewriter-text";

const DemoVariant1 = () => {
    return (
        <>
            <Typewriter
                text={[
                    "I build AI agents, data platforms, and full-stack products.",
                    "Projects in AI, big data, and developer tools.",
                    "Open to AI, data, and software roles.",
                    "Contact me - Aditya Kosuru.",
                ]}
                speed={100}
                loop={true}
                className="text-xl font-medium"
            />
        </>
    );
};

export { DemoVariant1 };
