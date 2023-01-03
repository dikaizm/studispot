import Button from "../components/Button";
import Subscribe from "../components/Subscribe";

export default function Error() {
    return (
        <>
            <div>
                <div className="absolute top-0 left-0 right-0 bg-spotBlue/10 h-[580px]"></div>
                <div className="relative container mx-auto mt-[80px] px-4 md:px-10">
                    <section className="flex flex-col items-center h-[500px]">
                        <img className="max-h-[180px] md:max-h-[200px]" src="/error.svg" />
                        <div className="text-center space-y-4 pt-12">
                            <h1 className="font-bold text-spotBlue text-2xl md:text-3xl">Segera hadir!</h1>
                            <p className="text-gray-500 max-w-md leading-loose text-sm md:text-base">Untuk menghadirkan pengalaman maksimal pada situs ini, kami masih membutuhkan beberapa waktu.</p>
                        </div>
                        <div className="pt-9">
                            <Button click="javascript:history.back()" style="outline" color="border-spotBlue text-spotBlue">Kembali</Button>
                        </div>
                    </section>
                    <section className="mx-auto max-w-[480px] h-[190px]">
                        <p className="text-gray-500 text-center pt-10 text-sm md:text-base">Dapatkan notifikasi ketika fitur ini telah siap!</p>
                        <div className="pt-6">
                            <Subscribe />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}