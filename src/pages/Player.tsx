import { useEffect } from "react";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { Video } from "../components/Video";
import { useStore } from "../zustand-store";


export function Player() {
    const {
        course,
        currentLessonIndex,
        currentModuleIndex,
        load,
    } = useStore(store => {
        return {
            course: store.course,
            currentLessonIndex: store.currentLessonIndex,
            currentModuleIndex: store.currentModuleIndex,
            load: store.load
        }
    })

    const modules = course?.modules

    const currentLesson = course?.modules[currentModuleIndex].lessons[currentLessonIndex]

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        if (currentLesson) {
            document.title = `Assistindo: ${currentLesson.title}`
        }
    }, [currentLesson])

    return (
     <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
        <div className="flex w-[1100px] flex-col gap-6">

            <Header />

            <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
                <div className="flex-1">
                    <Video />
                </div>

                <aside className="w-80 border-l absolute divide-y-2 divide-zinc-900 top-0 bottom-0 right-0 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
                    
                    {modules && modules.map((module, index) => {
                        return (
                            <Module
                                key={module.id}
                                moduleIndex={index}
                                title={module.title}
                                lessonsAmount={module.lessons.length}
                            />
                        )
                    })}

                </aside>

            </main>
        </div>
     </div>
    )
}