from django.conf.urls import url
from django.urls import path, include
from accounts.views import (
    signup, 
    login, 
    logout
    )

# URL Pattern for the account -login-logout-signup
urlpatterns = [
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
]
