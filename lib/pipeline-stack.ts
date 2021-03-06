import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { WorkshopPipelineStage } from './pipeline-stage';

export class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Pipeline code goes here

        // The basic pipeline declaration. This sets the initial structure
        // of our pipeline
        const pipeline = new CodePipeline(
            this, "CdktsWorkshopPipeline", 
            {
                pipelineName: "CdktsWorkshopPipeline",
                synth: new CodeBuildStep('SynthStep', {
                    input: CodePipelineSource.connection(
                        'amryamanah/cdkts_workshop',
                        'main', {
                            connectionArn: "arn:aws:codestar-connections:ap-southeast-1:710948242070:connection/20539e03-801c-4e6d-b00d-70fa6e92475f"
                        }
                    ),
                    installCommands: [
                        'npm install -g aws-cdk',
                    ],
                    commands: [
                        "npm ci",
                        "npx cdk synth",
                    ]
                })
            }
        );

        const deploy = new WorkshopPipelineStage(this, 'Deploy');
        const deployStage = pipeline.addStage(deploy);
    }

    
}
