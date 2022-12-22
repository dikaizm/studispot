import Button from "./Button"
import Search from "./Search"

function ContentItem({ image, title, tag, date }) {
    const addImage = ` ${image}`
    
    return (
        <div className="w-[286px]">
                <div className="h-48 rounded-xl overflow-hidden bg-slate-200 drop-shadow-xl">
                    <img src={`${addImage}`} className="h-full w-full object-cover" alt="Gambar" />
                </div>
                <p className="font-bold text-slate-700 leading-relaxed pt-3">{title}</p>
                <p className="text-xs text-slate-400 pt-2">{tag} / {date}</p>
            </div>
    )
}

function ContentItemGroup() {
    return (
        <section className="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-10 pt-16">
            <ContentItem
                image="https://img.freepik.com/free-photo/smiling-asian-woman-working-from-home-remotely-sitting-with-laptop-mobile-phone-korean-girl-doin_1258-84167.jpg?w=1800&t=st=1671568209~exp=1671568809~hmac=b110e6ce2cc59c3bae79303cea4d73e16735e3abe9152f148dc12a68642395dc"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="https://img.freepik.com/free-photo/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office-coworker-teamwork-concept_7861-2693.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="https://img.freepik.com/free-photo/asian-muslim-lady-write-information-strategy-reminder-glass-board-new-normal-office_7861-3252.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="/hero-home.svg"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="https://img.freepik.com/free-photo/young-students-learning-library-bookshelves_1150-10535.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="https://img.freepik.com/free-photo/young-students-learning-library-bookshelves_1150-10561.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="/hero-home.svg"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                image="https://img.freepik.com/free-photo/female-students-stand-stairs-hold-books_1150-24612.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.2.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
        </section>
    )
}

export default function Content() {
    return (
    <section className="container mx-auto max-w-[1240px] mt-[455px]">
        <div className="text-center space-y-5">
            <h2 className="font-bold text-spotBlue text-3xl">Tambah Pengetahuan Kamu</h2>
            <p className="text-slate-600">Temukan konten bermanfaat dan tingkatkan wawasanmu di Studispot!</p>
        </div>
        <Search />
        <div className="flex flex-col items-center gap-12">
            <ContentItemGroup />
            <Button color="text-white bg-spotBlue" style="normal">Lihat semua</Button>
        </div>
        
    </section>
    )
}