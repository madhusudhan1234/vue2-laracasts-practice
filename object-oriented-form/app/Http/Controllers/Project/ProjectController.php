<?php

namespace App\Http\Controllers\Project;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function create()
    {
        return view ('projects.create', [
            'projects' => Project::all()
        ]);
    }

    public  function store()
    {
        $this->validate(request(), [
           'name' => 'required',
           'description' => 'required'
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]);

        return ['message' => 'Project Created'];
    }
}
