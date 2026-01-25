import { useEffect } from "react";
import { BookOpen, Download } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ebookCover from "@/assets/ebook-cover.png";

const ThankYou = () => {
    useEffect(() => {
        // Auto download on page load
        const downloadFile = () => {
            const link = document.createElement('a');
            link.href = 'https://drive.google.com/uc?export=download&id=1574JoPLXUdvv1nG_s3sc55IcV4YbVoZg';
            link.download = 'The-Complete-Horoscope-2026.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // downloadFile();
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1574JoPLXUdvv1nG_s3sc55IcV4YbVoZg';
        link.download = 'The-Complete-Horoscope-2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center md:justify-end mt-8">
                        <img
                            src={ebookCover}
                            alt="The Complete Horoscope 2026 Ebook"
                            className="w-1/4 md:w-80 lg:w-96 drop-shadow-2xl box-glow-gold rounded-lg"
                        />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                            Thank You!
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Your download has started automatically. If it doesn't, click the button below.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <CTAButton onClick={handleDownload} className="inline-flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download E-Book Again
                    </CTAButton>
                </div>

                <p className="text-sm text-muted-foreground">
                    Enjoy your copy of "The Complete Horoscope 2026"
                </p>
            </div>
        </div>
    );
};

export default ThankYou;