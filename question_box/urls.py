from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("index/<str:lang>", views.index_lang, name="index_lang"),
    path("all_questions", views.all_questions, name="all_questions"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("ask", views.ask, name="ask"),
    path("my_questions", views.my_questions, name="my_questions"),
    path("therapists", views.therapists, name="therapists"),
    path("therapists/create", views.create_t, name="create_t"),
    path("post/<str:post>", views.post, name="post"),
    path("assign/<str:assign>", views.assign, name="assign"),
    path("<str:username>/answer/<str:answer>", views.answer, name="answer"),
    path("<str:username>/confirm/<str:confirm>", views.confirm, name="confirm")
]
