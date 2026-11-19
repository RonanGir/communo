package training.spring.communo.backend;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.testcontainers.postgresql.PostgreSQLContainer;

@SpringBootTest
class BackendApplicationTests {

	@ServiceConnection
	static PostgreSQLContainer postgresqlContainer = new PostgreSQLContainer("postgres:15.20");

	@Test
	void contextLoads() {}

}
