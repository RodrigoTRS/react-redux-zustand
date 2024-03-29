import { MessageCircle } from "lucide-react";
import { useCurrentLesson } from "../store/slices/player";
import { useAppSelector } from "../store";

export function Header() {
    const { currentModule, currentLesson } = useCurrentLesson()

    const isCourseLoading = useAppSelector(state => state.player.isLoading)

    if (!currentLesson || !currentModule) {
        return null
    }

    if (isCourseLoading) {
        return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-zinc-400">Carregando...</h1>
        </div>
        )
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
                <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
            </div>

            <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                <MessageCircle className="w-4 h-4"/>
                Deixar feedback
            </button>
        </div>
    )
}