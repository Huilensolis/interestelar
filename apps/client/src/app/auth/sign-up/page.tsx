import { SignUpForm } from './components/form'

export default function SignUpPage(): React.JSX.Element {
  return (
    <article className="w-full h-full flex flex-col gap-4 justify-center items-center px-5">
      <h1 className="text-3xl font-bold text-balance text-center">
        Organize your team project tasks in one place
      </h1>
      <SignUpForm />
    </article>
  )
}
