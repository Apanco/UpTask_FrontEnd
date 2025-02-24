import { TaskStaus } from "@/types"
import { obtenerEstiloPorcentaje, redondear, setPorcentaje } from "@/utils/utils"
import * as Progress from '@radix-ui/react-progress';




type TaskProgressBarProps = {
    tasks: TaskStaus[]
}
export default function TaskProgressBar({tasks} : TaskProgressBarProps) {
    const projectCompletionPercentage = setPorcentaje({tasks})
    const color = obtenerEstiloPorcentaje(projectCompletionPercentage)
    const textColor = `text${color}`;
    return (
      <div className=" w-full flex">
          <div className=" w-1/3 flex items-center">
            <h1>Progreso: <span className={`font-bold ${textColor} transition-transform`}>{" "+redondear(projectCompletionPercentage,1)} %</span></h1>
          </div>

        <div className=" w-2/3">
          <div className=" h-10 flex flex-col items-center justify-center">
              <Progress.Root className=" relative overflow-hidden bg-fondoP rounded-full w-full z-0 h-6" value={projectCompletionPercentage}>
                <Progress.Indicator
                  className={`w-full h-full bg${color} transition-transform`}
                  style={{ transform: `translateX(-${100 - projectCompletionPercentage}%)` }}
                />
              </Progress.Root>
          </div>
        </div>
        
        </div>
    )
}
