import Button from "./Button"
import Search from "./Search"

function ContentItem({ click, image, title, tag, date }) {
    const addImage = ` ${image}`
    
    return (
        <a href={`${click}`} className="w-[163px] md:w-[286px]">
            <div className="w-full">
                <div className="h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden bg-slate-200 drop-shadow-xl">
                    <img src={`${addImage}`} className="h-full w-full object-cover" alt="Gambar" />
                </div>
                <p className="text-xs md:text-base font-bold text-slate-700 leading-relaxed pt-3">{title}</p>
                <p className="text-[10px] md:text-xs text-slate-400 pt-2">{tag} / {date}</p>
            </div>
        </a>
    )
}

function ContentItemGroup() {
    return (
        <section className="grid grid-cols-2 pt-12 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-10 md:gap-x-8 md:pt-16 md:px-6">
            <ContentItem
                click=""
                image="/hero-home.svg"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="https://img.freepik.com/free-photo/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-brainstorming-meeting-ideas-mobile-application-software-design-project-modern-office-coworker-teamwork-concept_7861-2693.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="https://img.freepik.com/free-photo/asian-muslim-lady-write-information-strategy-reminder-glass-board-new-normal-office_7861-3252.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="/hero-home.svg"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="https://img.freepik.com/free-photo/young-students-learning-library-bookshelves_1150-10535.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="https://img.freepik.com/free-photo/young-students-learning-library-bookshelves_1150-10561.jpg?size=626&ext=jpg&uid=R13648884&ga=GA1.1.613371470.1624506590&semt=sph"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
                image="/hero-home.svg"
                title="Cara Mudah dan Efektif Belajar Sesuatu yang Baru"
                tag="Produktivitas"
                date="8 Des 2022"
            />
            <ContentItem
                click=""
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
    <section className="container mx-auto max-w-[1240px] mt-[400px] md:mt-[455px] px-4 md:px-0">
        <div className="text-center space-y-5">
            <h2 className="font-bold text-spotBlue text-2xl md:text-3xl">Tambah Pengetahuan Kamu</h2>
            <p className="text-sm md:text-base text-slate-600">Temukan konten bermanfaat dan tingkatkan wawasanmu di Studispot!</p>
        </div>
        <Search />
        <div className="flex flex-col items-center gap-8 md:gap-12">
            <ContentItemGroup />
            <Button click="/error" color="text-white bg-spotBlue" style="normal">Lihat semua</Button>
        </div>
        
    </section>
    )
}