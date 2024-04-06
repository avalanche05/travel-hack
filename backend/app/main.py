from app import create_app

app = create_app()

if __name__ == "__main__":
    # Запуск FastAPI приложения с помощью Uvicorn
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
