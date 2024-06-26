export class ClientRouting {
  constructor() {}

  public static auth() {
    const authPath = '/auth'

    return {
      signUp: () => `${authPath}/sign-up`,
      signIn: () => `${authPath}/sign-in`,
    }
  }

  public static app() {
    const appPath = '/app/dashboard'

    return {
      home: () => `${appPath}/`,
      inbox: () => `${appPath}/inbox`,
      projects: () => `${appPath}/projects`,
    }
  }

  public static projects() {
    const projectsPath = '/app/projects'
    return {
      home: () => `${projectsPath}`,
      restore: () => `${projectsPath}/restore`,
      project: (projectId: string) => ({
        home: () => `${projectsPath}/${projectId}`,
        board: () => `${projectsPath}/${projectId}/board`,
        members: () => `${projectsPath}/${projectId}/members`,
        settings: () => `${projectsPath}/${projectId}/settings`,
      }),
      create: () => `${projectsPath}/create`,
    }
  }
}
