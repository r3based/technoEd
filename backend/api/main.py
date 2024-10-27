from fastapi import APIRouter

from .routes import user, login, ping_pong, module, task, test, get_all_task_for_test, assign_task_for_test, get_open_tasks, check_solution

api_router = APIRouter()

"/get_open_tasks"
api_router.include_router(user.router, prefix="/user", tags=["user"])
api_router.include_router(login.router, prefix="/login", tags=["login"])
api_router.include_router(ping_pong.router, prefix="/ping_pong", tags=["ping_pong"])
api_router.include_router(module.router, prefix="/createCourse", tags=["create_course"])
api_router.include_router(task.router, prefix="/createTask", tags=["create_task"])
api_router.include_router(test.router, prefix="/createTest", tags=["create_test"])
api_router.include_router(get_all_task_for_test.router, prefix="/get_all_task_for_test", tags=["get_all_task_for_tes"])
api_router.include_router(assign_task_for_test.router, prefix="/assign_task_for_test", tags=["assign_task_for_test"])
api_router.include_router(get_open_tasks.router, prefix="/get_open_tasks", tags=["get_open_tasks"])
api_router.include_router(check_solution.router, prefix="/check_solution", tags=["check_solution"])