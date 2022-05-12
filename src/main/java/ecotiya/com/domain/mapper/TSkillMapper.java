package ecotiya.com.domain.mapper;

import ecotiya.com.domain.model.TSkill;
import ecotiya.com.domain.model.TSkillExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TSkillMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    long countByExample(TSkillExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int deleteByExample(TSkillExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int deleteByPrimaryKey(Long skillId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int insert(TSkill row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int insertSelective(TSkill row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    List<TSkill> selectByExample(TSkillExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    TSkill selectByPrimaryKey(Long skillId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int updateByExampleSelective(@Param("row") TSkill row, @Param("example") TSkillExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int updateByExample(@Param("row") TSkill row, @Param("example") TSkillExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int updateByPrimaryKeySelective(TSkill row);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_skill
     *
     * @mbg.generated Thu May 12 17:12:38 JST 2022
     */
    int updateByPrimaryKey(TSkill row);
}