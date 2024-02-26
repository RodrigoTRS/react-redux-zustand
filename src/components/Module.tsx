import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from '@radix-ui/react-collapsible';
import { useStore } from "../zustand-store";



interface ModuleProps {
    moduleIndex: number
    title: string
    lessonsAmount: number
}

export function Module({ moduleIndex, title, lessonsAmount}: ModuleProps) {

    const {
        currentLessonIndex,
        currentModuleIndex,
        course,
        play
    } = useStore(store => {
        return {
            currentLessonIndex: store.currentLessonIndex,
            currentModuleIndex: store.currentModuleIndex,
            course: store.course,
            play: store.play
        }
    })

    const lessons = course?.modules[currentModuleIndex].lessons


    return (
        <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">

                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    {moduleIndex + 1}
                </div>
                <div className="flex flex-col gap-1 text-left">
                    <strong>
                        {title}
                    </strong>
                    <span className="text-xs text-zinc-400">
                        {lessonsAmount} aulas
                    </span>
                </div>

                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform"/>
            </Collapsible.Trigger>
            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons && lessons.map((lesson, lessonIndex) => {
                        const isCurrent = currentModuleIndex === moduleIndex &&
                            currentLessonIndex === lessonIndex

                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                duration={lesson.duration}
                                onPlay={() => (play([moduleIndex, lessonIndex]))}
                                isCurrent={isCurrent}
                            />
                        )
                    })}
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}