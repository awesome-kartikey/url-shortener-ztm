use crate::helpers::spawn_app;

#[tokio::test]
async fn admin_dashboard_is_protected() {
    // Arrange
    let app = spawn_app().await;
    let client = reqwest::Client::new();

    // Act
    let response = client
        .get(&format!("{}/admin", &app.address))
        .send()
        .await
        .expect("Failed to execute request.");

    // Assert
    assert_eq!(
        response.status().as_u16(),
        401,
        "Admin dashboard should be protected and return 401 Unauthorized without API key"
    );
}

#[tokio::test]
async fn admin_dashboard_is_accessible_with_valid_api_key() {
    // Arrange
    let app = spawn_app().await;
    let client = reqwest::Client::new();

    // Act
    let response = client
        .get(&format!("{}/admin", &app.address))
        .header("x-api-key", app.api_key.to_string())
        .send()
        .await
        .expect("Failed to execute request.");

    // Assert
    assert_eq!(
        response.status().as_u16(),
        200,
        "Admin dashboard should be accessible with a valid API key"
    );
}
