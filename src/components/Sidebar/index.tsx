import { useGetLessonsQuery } from "../../graphql/generated";
import Lesson from "../Lesson";

const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    //No Tailwind, quando não encontramos a medida que queremos, utilizamos a medida no colchete w-[348px]
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
