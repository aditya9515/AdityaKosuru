import { Typewriter } from "@/components/ui/typewriter-text"

const DemoVariant1 = () => {
    return (
        <>
            <Typewriter
                text={["Looking to get a personal AI agent?",
                        "Want your own professional webpage?",
                        "Need data analysis services?",
                        "Interested in a custom deep learning model?",
                        "Contact me — Aditya Kosuru."]}
                speed={100}
                loop={true}
                className="text-xl font-medium"
            />
        </>
    )
}

export { DemoVariant1 }