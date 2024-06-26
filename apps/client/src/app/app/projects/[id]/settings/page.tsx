import { ProjectService } from '@/services/project'
import { getCookie } from '@/utils/cookie/get-cookie'
import { ProjectSettingsForm } from './components/project-settings-form'
import { DeleteProjectBtn } from './components/project-settings-form/delete-project'

export default async function SettingsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  try {
    const { cookie } = getCookie()
    if (!cookie) throw new Error('no cookies found')

    const { data, error } = await ProjectService.CRUD.getById(id, cookie)

    if (!data?.project || error) throw new Error('error fetching project')

    const { project } = data

    return (
      <div className="flex flex-col items-center h-full w-full">
        <header className="w-full py-4">
          <h1 className=" font-medium text-3xl text-neutral-800">
            Project Settings
          </h1>
          <h2 className="text-neutral-700">Configure project details</h2>
        </header>
        <article className="flex flex-col items-center justify-center h-full gap-2">
          <ProjectSettingsForm
            projectId={id}
            defaultValues={{ name: project.name }}
          />
          <section className="flex items-center justify-end w-full">
            <DeleteProjectBtn projectName={project.name} projectId={id} />
          </section>
        </article>
      </div>
    )
  } catch (error) {
    return <ErrorMessage />
  }
}

function ErrorMessage() {
  return <span>there is been an error, please try again</span>
}
