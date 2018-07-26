package com.ha.healthauditlog.model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "t_role")
public class Role implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")	
	
	 @Column(name="role_id")
     private Long roleId;
	
	@Column(name="name")
     private String name; 
	
	 @ManyToMany(mappedBy = "roles")
     private Set<User> users;
     
     
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}
	 
		
}
