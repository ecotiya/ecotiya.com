package com.app.kos0514.domain.repository.base;

import java.io.File;

import javax.sql.DataSource;

import org.dbunit.database.DatabaseConfig;
import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.csv.CsvDataSet;
import org.dbunit.operation.DatabaseOperation;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.Transactional;

import com.app.kos0514.api.config.DbConfig;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class Kos0514BaseMapperTest {

  @Autowired private DataSource ds;

  private IDatabaseConnection dbconn;

  private IDataSet inputCsvDataSet;

  /**
   * Clean and insert test data before each test method.
   *
   * @throws Exception SQLException thrown when connecting to database
   */
  @BeforeEach
  public void setup() throws Exception {
    this.dbconn = new DatabaseConnection(this.ds.getConnection());
    DatabaseConfig databaseConfig = dbconn.getConfig();
    databaseConfig.setProperty(DatabaseConfig.FEATURE_ALLOW_EMPTY_FIELDS, Boolean.TRUE); // 空文字許可
    this.inputCsvDataSet =
        new CsvDataSet(new File("src/test/resources/com/app/kos0514/domain/repository/"));
    DatabaseOperation.CLEAN_INSERT.execute(dbconn, inputCsvDataSet);
  }

  /**
   * Close database connection after each test method.
   *
   * @throws Exception SQLException thrown when closing the connection
   */
  @AfterEach
  public void teardown() throws Exception {
    this.dbconn.close();
  }
}
