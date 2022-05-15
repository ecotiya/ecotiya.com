package com.app.ecotiya.domain.repository;

import java.io.File;

import javax.sql.DataSource;

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

import com.app.ecotiya.api.config.DbConfig;
import com.app.ecotiya.domain.repository.base.EcotiyaBaseTest;

@SpringBootTest
@Transactional
@Import(DbConfig.class)
public class MainAppMapperTest extends EcotiyaBaseTest {

  @Autowired private TSiteCommentMapper tSiteCommentMapper;
  @Autowired private TCareerMapper tCareerMapper;
}
